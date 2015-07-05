<?php
namespace Topxia\Component\Payment\Wxpay;

use Topxia\Component\Payment\Response;

class WxpayResponse extends Response
{    
    public function getPayData()
    {
        $params = $this->params;
        $data = array();
        $data['payment'] = 'wxpay';
        $data['sn'] = $params['out_trade_no'];
        if(in_array($params['result_code'], array('SUCCESS','ORDERPAID'))) {
            $data['status'] = 'success';
        } else if (in_array($params['result_code'], array('ORDERCLOSED'))) {
            $data['status'] = 'closed';
        } else {
            $data['status'] = 'unknown';
        }
        $data['amount'] = $params['total_fee'] / 100;

        if (!empty($params['time_end'])) {
            $data['paidTime'] = strtotime($params['time_end']);
        } else {
            $data['paidTime'] = time();
        }

        $data['raw'] = $params;
        $myfile = fopen("mytestfile0.txt","w");
        $txt = implode($data);
        fwrite($myfile, $txt);
        $txt = "test0!!!!!";
        fwrite($myfile, $txt);
        fclose($myfile);
        return $data;
    }

}