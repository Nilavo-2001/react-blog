import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red, blue } from "@mui/material/colors";

export default function postCard(props) {
  console.log("in card", props);
  return (
    <Card sx={{ maxWidth: 900, margin: "15px auto", textAlign: "left" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[400] }} aria-label="recipe">
            N
          </Avatar>
        }
        title={props.data.title}
        subheader={props.data.Date.substring(0, 15)}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.data.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
