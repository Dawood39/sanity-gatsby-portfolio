export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5f75634aed608ca0b00c7181',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-uimgucvp',
                  apiId: '69916331-f21d-4976-a3f8-11b442599f68'
                },
                {
                  buildHookId: '5f75634a23f83ec0ba6004aa',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-kjuzq4vm',
                  apiId: 'f3faecbe-cb0e-489b-aae6-6b275eb11fcc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Dawood39/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-kjuzq4vm.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
