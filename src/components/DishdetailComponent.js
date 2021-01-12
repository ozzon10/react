import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Media } from "reactstrap";



    
    function RenderComments({comments}){
      
        const comment = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            )
        });
        return (
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <Media className = "list-unstyled" list>
              {comment}
            </Media>
          </div>
        );
      
      
      
    }

    function RenderDish({dish}) {
        return (
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
        );
    }

    const DishDetail = (props) =>{
      
      if(props.dish != null){
        return (
          <div className="container">
            <div className="row">
             <RenderDish dish={props.dish}/>
             <RenderComments comments={props.dish.comments}/>
             </div>
          </div>
        );
      }
      else{
        return(
        <div></div>
        );
      }
    }

export default DishDetail;