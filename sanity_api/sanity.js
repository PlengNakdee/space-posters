import sanityClient from '@sanity/client';

const options = {
  // dataset: process.env.SANITY_DATASET_NAME,
  // projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  projectId: 'vqbbzfse',
  apiVersion: '2021-03-25',
  useCdn: process.env.NODE_ENV === 'production'
  // useCdn === true, gives you fast response, it will get you
  // cached data
  // useCdn === false, give you little bit slower response, but
  // latest data
}

export default sanityClient(options);