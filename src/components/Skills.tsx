

export function Skills() {
  const techExperence = [
    {
      id: '1',
      title: 'html5',
      url: './src/assets/tech/html5.svg',
      percent: '68'
    },
    {
      id: '2',
      title: 'css3',
      url: './src/assets/tech/css3.svg',
      percent: '61'
    },
    {
      id: '3',
      title: 'javascript',
      url: './src/assets/tech/javascript.svg',
      percent: '42'
    },
    {
      id: '4',
      title: 'reactjs',
      url: './src/assets/tech/reactjs.svg',
      percent: '43'
    },
    {
      id: '5',
      title: 'nodejs',
      url: './src/assets/tech/node.svg',
      percent: '43'
    },
    {
      id: '6',
      title: 'dotnet',
      url: './src/assets/tech/dot-net.svg',
      percent: '61'
    },
    {
      id: '7',
      title: 'mysql',
      url: './src/assets/tech/mysql.svg',
      percent: '62'
    },
    {
      id: '8',
      title: 'sql server',
      url: './src/assets/tech/sql-server.svg',
      percent: '62'
    }
  ]

  return (
    <>
      {techExperence.map(techExperence => {
        return (
          <p className=" w-full">

            <div className="mb-1 text-xl lg:text-2xl font-medium text-yellow-700 dark:text-yellow-500">
              {techExperence.title}
            </div>
            <div className="">
            <progress className="w-full h-2.5 " value={techExperence.percent} max="100"></progress>
            <span className="flex justify-center text-sm lg:text-lg">{techExperence.percent} %</span>
            </div>
          </p>
        )
      })}
    </>
  )
}
