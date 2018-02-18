
Ext.define('Capital.view.main.FormPanel',{
    extend: 'Ext.form.Panel',
    xtype: 'form-panel',

    requires: [
        'Capital.view.main.FormPanelController',
        'Capital.view.main.FormPanelModel'
    ],

    controller: 'main-formpanel',
    viewModel: {
        type: 'main-formpanel'
    },
    frame: true,
    title: 'Инфо',
    bodyPadding: 5,
    scrollable:true,
    width: 300,
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 100,
        msgTarget: 'side'
    },



    items: [ {
        xtype: 'fieldset',
        title: 'Информация о студенте',
        minWidth: 230,

        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [{
            fieldLabel: 'Фамилия',
            maskRe: /[А-ЯЁа-яё]/,
            allowBlank: false,
            name: 'surname'
        },{
            fieldLabel: 'Имя',
            maskRe: /[А-ЯЁа-яё]/,
            allowBlank: false,
            name: 'firstname'
        },{
            xtype: 'numberfield',
            fieldLabel: 'Количество<br>дипломов',
            allowBlank: false,
            minValue: 0,
            maxValue: 10,
            value: 0,
            name: 'diplom_count'
        }, {
            fieldLabel: 'Количество<br>друзей',
            allowBlank: false,
            xtype: 'numberfield',
            minValue: 0,
            value: 0,
            name: 'friends'
        }, {
            fieldLabel: 'Опыт работы<br>(Формат X.X)',
            allowBlank: false,
            regex: /^([0-5][\.][0-9])|([0])$/i,
            maskRe: /[0-9\.]/,
            name: 'work_experience'
        }, {
            fieldLabel: 'Средний балл<br>(Формат X.XX)',
            allowBlank: false,
            regex: /^([1-4][\.][0-9][0-9])|([5][\.][0][0])$/i,
            maskRe: /[0-9\.]/,
            name: 'ball'
        }]
    }],

    buttons: [{
        text: 'Посчитать рейтинг',
        iconCls: 'fa fa-star',
        handler: 'calculateRating',
        disabled: true,
        formBind: true
    }]
});
