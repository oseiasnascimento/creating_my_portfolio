export function Tech() {
  const techExperence = [
    {
      id: '1',
      title: 'html5',
      url: './src/assets/tech/html5.svg',
      percent: '68%'
    },
    {
      id: '2',
      title: 'css3',
      url: './src/assets/tech/css3.svg',
      percent: '68%'
    },
    {
      id: '3',
      title: 'javascript',
      url: './src/assets/tech/javascript.svg',
      percent: '42%'
    },
    {
      id: '4',
      title: 'reactjs',
      url: './src/assets/tech/reactjs.svg',
      percent: '43%'
    },
    {
      id: '5',
      title: 'nodejs',
      url: './src/assets/tech/node.svg',
      percent: '43%'
    },
    {
      id: '6',
      title: 'dotnet',
      url: './src/assets/tech/dot-net.svg',
      percent: '61%'
    },
    {
      id: '7',
      title: 'mysql',
      url: './src/assets/tech/mysql.svg',
      percent: '62%'
    },
    {
      id: '8',
      title: 'sql server',
      url: './src/assets/tech/sql-server.svg',
      percent: '62%'
    }
  ]

  const techStudenty = [
    {
      title: 'mongodb',
      url: './src/assets/tech/mongodb.svg'
    },
    {
      title: 'typescript',
      url: './src/assets/tech/typescript.svg'
    },
    {
      title: 'graphql',
      url: './src/assets/tech/graphql.svg'
    },
    {
      title: 'tailwindcss',
      url: './src/assets/tech/tailwindcss.svg'
    },
    {
      title: 'docker',
      url: './src/assets/tech/docker.svg'
    },
    {
      title: 'nextjs',
      url: './src/assets/tech/nextjs.svg'
    }
  ]

  return (
    <div className="lg:flex justify-center gap-24 mb-32 m-auto">

        <div className="flex flex-col text-sm lg:text-2xl text-center p-10">
          <h2 className="mb-6">Tenho experiência</h2>

          <div className="grid grid-cols-2 gap-2">
            {techExperence.map(techExperence => {
              return (
                <span className="flex items-center rounded-lg border border-blue-500 m-1 p-4 hover:bg-gray-800 hover:border-orange-500 hover:-translate-y-2 transition-transform group">
                  <img
                    className="h-12 lg:h-16 ml-0 lg:ml-2 mr-4 lg:mr-6 rounded-lg shadow"
                    src={techExperence.url}
                    alt={techExperence.title}
                  />
                  <strong>{techExperence.title}</strong>
                </span>
              )
            })}
          </div>
        </div>
 
        <div className="flex flex-col text-sm lg:text-2xl text-center p-10 ">
          <h2 className="mb-6">Estou estudando</h2>

          <div className="grid  grid-cols-2 gap-2">
            {techStudenty.map(techStudenty => {
              return (
                <span className="flex items-center rounded-lg border border-blue-500 m-1 p-4 hover:bg-gray-800 hover:border-orange-500 hover:-translate-y-2 transition-transform group">
                  <img
                    className="h-12 lg:h-16 ml-0 lg:ml-2 mr-4 lg:mr-6 rounded-lg shadow"
                    src={techStudenty.url}
                    alt={techStudenty.title}
                  />
                  <strong>{techStudenty.title}</strong>
                </span>
              )
            })}
          </div>
        </div>
    </div>
  )
}
