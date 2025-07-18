import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardHeader,
  Col,
} from "reactstrap";

import Color from "color-thief-react";

import { motion } from "framer-motion";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="4">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover shadow border-0 text-center rounded"
        >
          <Color src={data.companylogo} format="hex">
            {(color) => (
              <CardHeader style={{ background: color.data }}>
                <h5 className="text-white">{data.company}</h5>
              </CardHeader>
            )}
          </Color>
          <CardBody className="py-5">
            <div
              className="bg-white rounded-circle mb-3 img-center img-fluid shadow-lg "
              style={{ width: "100px", height: "100px" }}
            >
              <img
                src={`${data.companylogo}`}
                width={"100px"}
                height={"100px"}
                alt={data.companylogo}
              />
            </div>
            <CardTitle tag="h5">{data.role}</CardTitle>
            <CardSubtitle>{data.date}</CardSubtitle>
            <CardText tag="div" className="description my-3 text-left">
              {data.desc}
              <ul>
                {data.descBullets
                  ? data.descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul>
            </CardText>
          </CardBody>
        </Card>
      </motion.div>
    </Col>
  );
};

export default ExperienceCard;
