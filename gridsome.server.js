// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection, addMetadata }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    addMetadata('email', 'nicholas.christakis@yale.edu')
    addMetadata('projectEmailSubject', 'Regarding ${project.title}')
    addMetadata('projectEmailBody', "Dear Nicholas,\n\nI’m interested in providing ${goal.id === 'B' ? 'major ' : ''}support for your research on ${project.title}.")
    
    addMetadata('basicEmailSubject', 'Partnering with the Human Nature Lab')
    addMetadata('basicEmailBody', '')
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
