import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'project',
    title: 'Project',
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
            name: 'image',
            title: 'Profile image',
            type: 'image'
        }),
    ],


})