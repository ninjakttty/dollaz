import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';
const data = [
  {
    name: "Military",
    id: "Military",
    value: 30,
  },
  {
    name: "Government",
    id: "Government",
    value: 10,
  },
  {
    name: "Education",
    id: "Education",
    value: 10,
  },
  {
    name: "Veterans Benefits",
    id: "Veterans Benefits",
    value: 10,
  },
  {
    name: "Medicare",
    id: "Medicare",
    value: 10,
  },
  {
    name: "Housing",
    id: "Housing",
    value: 10,
  },
  {
    name: "Energy & Environment",
    id: "Energy & Environment",
    value: 10,
  },
  {
    name: "Social Security",
    id: "Social Security",
    value: 10,
  },
  {
    name: "Transportation",
    id: "Transportation",
    value: 10,
  },

];


const COLORS = ['#26294A', '#01545A','#017351','#03C383','#AAD962','#FBBF45','#EF6A32','#ED0345','#A12A5E','#710162'];


const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const RADIAN = Math.PI / 180;
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip  = React.createClass({


  getIntroOfPage(label) {
    if (label === 'Page A') {
      return "Page A is about men's clothing";
    } else if (label === 'Page B') {
      return "Page B is about women's dress";
    } else if (label === 'Page C') {
      return "Page C is about women's bag";
    } else if (label === 'Page D') {
      return "Page D is about household goods";
    } else if (label === 'Page E') {
      return "Page E is about food";
    } else if (label === 'Page F') {
      return "Page F is about baby food";
    }
  },

  render() {
    const { active } = this.props;
    console.log('tool', this.props)
    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="intro">{this.getIntroOfPage(label)}</p>
          <p className="desc">Anything you want can be displayed here.</p>
        </div>
      );
    }

    return null;
  }
});

export default () => (
  <div>
    <style jsx>{`
      p {
        color: black;
      }
      div {
        background: white;
      }
    `}</style>

    <PieChart width={1200} height={1200} >
      <Tooltip content={<CustomTooltip/>}/>
      <Pie
        data={data}
        cx={300}
        cy={200}
        labelLine={false}
        outerRadius={200}
        fill="#8884d8"
        label={renderCustomizedLabel}
      >
        {
          data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
        }

      </Pie>
    </PieChart>

  </div>
)
