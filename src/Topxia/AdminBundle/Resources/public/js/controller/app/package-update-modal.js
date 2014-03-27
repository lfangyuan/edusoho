define(function(require, exports, module) {

    var Widget = require('widget');

    exports.run = function() {
        var progressBar = new ProgressBar({
            element: '#package-update-progress'
        });

        $("#begin-update").click(function() {
            progressBar.show();
            $(this).hide();
            $("#updating-hint").show();

            var urls = $(this).data();
            var steps = [
                {
                    title: '检查系统环境',
                    url: urls.checkEnvironmentUrl,
                    progressRange: [5, 15]
                },
                {
                    title: '检查依赖',
                    url: urls.checkDependsUrl,
                    progressRange: [20, 30]
                },
                {
                    title: '备份系统文件',
                    url: urls.backupFileUrl,
                    progressRange: [35, 45]
                },
                {
                    title: '备份数据库',
                    url: urls.backupDbUrl,
                    progressRange: [50, 60]
                },
                {
                    title: '下载安装升级程序',
                    url: urls.downloadExtractUrl,
                    progressRange: [65, 80]
                },
                {
                    title: '执行安装升级程序',
                    url: urls.beginUpgradeUrl,
                    progressRange: [90, 100]
                }
            ];

            $.each(steps, function(i, step) {
                $(document).queue('update_step_queue', function() {
                    exec(step.title, step.url, progressBar, step.progressRange[0], step.progressRange[1]);
                });
            });

            $(document).dequeue('update_step_queue');

            progressBar.on('completed', function() {
                progressBar.deactive();
                progressBar.text('应用安装/升级成功！');
                $("#updating-hint").hide();
                $("#finish-update-btn").show();
            });

        });

        $("#finish-update-btn").click(function(){
            window.location.reload();
        });

    };



    function exec(title, url, progressBar, startProgress, endProgress) {
        progressBar.setProgress(startProgress, '正在' + title);
        $.ajax(url, {
            async: true,
            dataType: 'json',
            type: 'POST'
        }).done(function(data, textStatus, jqXHR) {
            if (data.status == 'error') {
                progressBar.error(makeErrorsText(title + '失败：', data.errors));
            } else {
                progressBar.setProgress(endProgress, title + '完成');
            }
            $(document).dequeue('update_step_queue');
        }).fail(function(jqXHR, textStatus, errorThrown) {
            progressBar.error( title +  '时，发生了未知错误。');
            $(document).clearQueue('update_step_queue');
        });
    }

    function makeErrorsText(title, errors) {
        var html = '<p>' + title + '<p>';
        html += '<ul>';
        $.each(errors, function(index, text) {
            html += '<li>' + text + '</li>';
        });
        html += '</ul>';
        return html;
    }

    var ProgressBar = Widget.extend({

        setProgress: function(progress, text) {
            this.$('.progress-bar').css({width: progress + '%'});
            this.$('.progress-text').html(text);

            if (progress >= 100) {
                this.trigger('completed');
            }
        },

        reset: function() {
            this.$('.progress-bar').css({width: '0%'});
            this.$('.progress-text').html('');
        },

        show: function() {
            this.element.show();
        },

        hide: function() {
            this.element.hide();
        },

        active: function() {
            this.$('.progress').addClass('active').addClass('progress-striped');
        },

        deactive: function() {
            this.$('.progress').removeClass('active').removeClass('progress-striped');
        },

        text: function(text) {
            this.$('.progress-text').html(text);
        },

        error: function(text) {
            this.$('.progress-bar').addClass('progress-bar-danger');
            this.$('.progress-text').addClass('text-danger').html(text);
            this.deactive();
        },

        recovery: function() {
            this.$('.progress-bar').removeClass('progress-bar-danger');
            this.$('.progress-text').removeClass('text-danger').html('');
            this.active();
        },

        hasError: function() {
            return this.$('.progress-bar').hasClass('progress-bar-danger');
        }

    });

});