import React, {Component} from "react";
import Box from "@material-ui/core/Box/Box";
import Container from "@material-ui/core/Container/Container";
import {Fade} from "react-reveal";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Fade>
          <Container>
            <Box my={2}>
              {[...new Array(12)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                )
                .join('\n')}
            </Box>
          </Container>
        </Fade>
      </div>
    )
  }
}

export default Notification;
