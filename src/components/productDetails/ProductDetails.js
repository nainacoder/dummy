import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { productDetailsFetchingRequest } from "../../redux/ProductDetails/ProductDetailsAction";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
const ProductDetails = (props) => {
  const { id } = useParams();
  React.useEffect(() => {
    props.productDetailsFetchingRequest(id);

    // console.log("props", props.match.params);
  }, [id]);
  // console.log("props",props.match.params)
  console.log("ProductDetails", props.details);
  return (
    <div
      style={{
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Card sx={{ maxWidth: 345, cursor: "pointer" }}>
        <CardHeader
          title={<b>{props.details.brand}</b>}
          style={{ textAlign: "center" }}
        />
        <CardMedia
          image={props.details.images && props.details.images[0]}
          alt=""
          style={{
            width: "250px",
            height: "300px",
            margin: "auto",
          }}
        />
        <CardContent>
          <Typography>
            <b>Category:</b>{" "}
            <b style={{ color: "Blue" }}>{props.details.category}</b>
          </Typography>
          <Typography>
            <b>Description:</b>{" "}
            <b style={{ color: "Blue" }}>{props.details.description}</b>
          </Typography>
          <Typography>
            <b>Discount: </b>{" "}
            <b style={{ color: "red" }}>{props.details.discountPercentage} %</b>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
const mapStateToProps = ({ productDetails }) => ({
  details: productDetails.details,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      productDetailsFetchingRequest,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
