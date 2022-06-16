import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProductRequest } from "../../redux/ProductList/ProductListAction";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  //  props.fetchProductRequest();
  React.useEffect(() => {
    props.fetchProductRequest();
  }, []);
  console.log(props.lists);
  console.log("Product list");
  return (
    <ImageList cols={3} rowHeight={600}>
      {props.lists &&
        props.lists.map((item) => {
          return (
            <ImageListItem item xs={6} key={item.id}>
              <Link
                to={`/productDetails/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card sx={{ maxWidth: 345, cursor: "pointer" }}>
                  <CardHeader
                    title={<b>{item.brand}</b>}
                    style={{ textAlign: "center" }}
                  />
                  <CardMedia
                    image={item.images[0]}
                    style={{
                      width: "250px",
                      height: "300px",
                      margin: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography>
                      <b>Category:</b>{" "}
                      <b style={{ color: "Blue" }}>{item.category}</b>
                    </Typography>
                    <Typography>
                      <b>Description:</b>{" "}
                      <b style={{ color: "Blue" }}>{item.description}</b>
                    </Typography>
                    <Typography>
                      <b>Discount: </b>{" "}
                      <b style={{ color: "red" }}>
                        {item.discountPercentage} %
                      </b>
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </ImageListItem>
          );
        })}
    </ImageList>
  );
};

const mapStateToProps = ({ productList }) => ({
  lists: productList.lists,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchProductRequest,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
