import ChartBar from '../ChartBar/ChartBar';
import './Chart.css'

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    let sum=0;
    for(let dataPointValue of dataPointValues){
        sum += dataPointValue
    }
    return(
        <div className='chart'>
            {
                props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} maxValue={sum} /> )
            }
        </div>
    )
}

export default Chart;