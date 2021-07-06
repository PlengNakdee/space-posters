// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'posters',
      type: 'document',
      title: 'Posters',
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          validation: Rule => Rule.required()
        },
        {
          title: "Detail",
          name: "detail",
          type: 'text',
          validation: Rule => Rule.required()
        },
        {
          title: "Price",
          name: "price",
          type: "number",
          validation: Rule => Rule.required()
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          title: 'Image1',
          name: 'image1',
          type: 'image',
          validation: Rule => Rule.required()
        },
        {
          title: 'Image2',
          name: 'image2',
          type: 'image',
          validation: Rule => Rule.required()
        },
        {
          title: 'Image3',
          name: 'image3',
          type: 'image',
          validation: Rule => Rule.required()
        },
      ],
    } ]),

})
