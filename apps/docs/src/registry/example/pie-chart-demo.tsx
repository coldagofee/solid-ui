import { Card, CardContent, CardHeader, CardTitle } from "~/registry/ui/card"
import { PieChart } from "~/registry/ui/charts"

export default function PieChartDemo() {
  const chartData = {
    labels: ["New York", "London", "Hong Kong", "San Francisco", "Singapore", "Zurich"],
    datasets: [
      {
        data: [9800, 4567, 3908, 2400, 1908, 1398]
      }
    ]
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <PieChart class="h-[200px] w-[200px]" data={chartData} />
      </CardContent>
    </Card>
  )
}
