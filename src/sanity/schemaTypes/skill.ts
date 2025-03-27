import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title', // This is Sanity Field name " TITLE "
            type: 'string'

        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text'
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'image',

        }),
    ],


})