import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'e-commerce',

  projectId: 'bpwt6shq',
  dataset: 'mental',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
