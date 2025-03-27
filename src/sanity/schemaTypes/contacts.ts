import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        defineField({
            name: 'phone',
            title: 'Phone Number', // This is Sanity Field name " TITLE "
            type: 'string'
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string'
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'text'
        }),
        
    ],


})