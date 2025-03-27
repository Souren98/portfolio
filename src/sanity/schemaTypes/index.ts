import { type SchemaTypeDefinition } from 'sanity'
import user from './portfolio'
import contacts from './contacts'
import project from './project'
import skill from './skill'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user,contacts,project,skill],
}
