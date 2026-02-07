import 
{ Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,

} from "./card"

export const Carousel = () => {

  return (
    <Card className="w-100 h-70 mx-auto">
      <CardHeader></CardHeader>
      <CardTitle></CardTitle>
      <CardAction></CardAction>
      <CardDescription></CardDescription>
      <CardContent></CardContent>
      <CardFooter></CardFooter>

    </Card>
  )
}