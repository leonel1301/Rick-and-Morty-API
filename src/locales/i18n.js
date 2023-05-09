import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale:'es',
    messages:{
        en:{
            status: 'Status',
            gender: 'Gender',
            title: 'Rick and Morty',
            detail: 'Detail',
        },
        es:{
            status: 'Estado',
            gender: 'Género',
            title: 'Rick y Morty',
            detail: 'Detalle',
        },
        fr:{
            status: 'Statut',
            gender: 'Sexe',
            title: 'Rick et Morty',
            detail: 'Détail',
        },
        ja:{
            status: 'ステータス',
            gender: '性別',
            title: 'リック・アンド・モーティ',
            detail: '詳細',
        }
    }
})

export  default  i18n;