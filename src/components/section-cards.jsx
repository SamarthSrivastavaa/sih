import { IconTrendingDown, IconTrendingUp, IconLeaf, IconAlertTriangle, IconRecycle, IconDroplet } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div
      className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="flex items-center gap-2">
            <IconLeaf className="size-4 text-green-600" />
            Carbon Footprint
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            2,847 tCO₂
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-green-600">
              <IconTrendingDown />
              -15.2%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-green-600">
            Reduced emissions this month <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Real-time monitoring active
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="flex items-center gap-2">
            <IconDroplet className="size-4 text-blue-600" />
            Water Usage
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            847,230 L
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-red-600">
              <IconTrendingUp />
              +8.3%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-red-600">
            Above target this period <IconAlertTriangle className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Optimization required
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="flex items-center gap-2">
            <IconRecycle className="size-4 text-purple-600" />
            Waste Recovery
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            78.4%
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-green-600">
              <IconTrendingUp />
              +5.2%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-green-600">
            Circular economy progress <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Exceeding sustainability targets</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="flex items-center gap-2">
            <IconAlertTriangle className="size-4 text-orange-600" />
            Compliance Score
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            92.7%
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-green-600">
              <IconTrendingUp />
              +2.1%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-green-600">
            Environmental compliance <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">All systems operational</div>
        </CardFooter>
      </Card>
    </div>
  );
}
