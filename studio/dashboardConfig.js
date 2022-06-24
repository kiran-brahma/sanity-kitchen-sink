export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62b5875534b18d62a73d9de2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zphd7viu',
                  apiId: '831ea0b7-8f4f-49e2-84cf-9503618cc045'
                },
                {
                  buildHookId: '62b5875502648a6281674c2e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-y5gwkxtk',
                  apiId: '6de8054e-2609-4674-b607-6ec73e95580d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kiran-brahma/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-y5gwkxtk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
