Ext.define('Capital.view.main.FormPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-formpanel',


    calculateRating: function (button) {
        var surName = button.up('form-panel').down('[name=surname]').getValue();
        var firstName = button.up('form-panel').down('[name=firstname]').getValue();
        var diplom_count = button.up('form-panel').down('[name=diplom_count]').getValue();
        var friends = button.up('form-panel').down('[name=friends]').getValue();
        var experience = button.up('form-panel').down('[name=work_experience]').getValue();
        var ball = button.up('form-panel').down('[name=ball]').getValue();

        // 1 стадия

        friends = (Math.sqrt(friends) / 3 > 10) ? 10 : Math.round(Number(Math.sqrt(friends) / 3));
        experience = ((experience * 2) > 10) ? 10 : Math.round(Number(experience * 2));
        ball = ((ball * 2) > 10) ? 10 : Math.round(Number(ball * 2));

        // 2-4 стадия
        var mu = (diplom_count + friends + experience + ball) / 4;
        var c1 = 0.43;
        var c2 = 0.23;
        var c3 = 0.19;
        var c4 = 0.15;

        var result = Math.round(mu*(c1*diplom_count+c2*friends+c3*experience+c4*ball));

        Ext.MessageBox.show({
            title: 'Сообщение',
            maxWidth: 300,
            msg: "Студент - " + firstName + " " + surName + " <br> Результаты капитализации - " + result + " т. р",
            buttons: Ext.MessageBox.OK,
            animateTarget: button,
            scope: this,
            icon: 'fa fa-info-circle fa-3x'
        });

    }


});
