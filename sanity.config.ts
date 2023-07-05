import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './sanity/schemas';

const config = defineConfig({
  name: 'default',
  title: 'qcm-2-sanity',

  projectId: '1foy2uw8',
  dataset: 'production',
  apiVersion: '2023-06-29',
  basePath:"/admin",

  plugins: [deskTool()],

  schema:{
    types: schemas,
  },


});

export default config;