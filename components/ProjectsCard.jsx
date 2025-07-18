import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { motion } from "framer-motion";

const ProjectsCard = ({ data }) => {
  return (
    <Col lg="6">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>{data.name}</h3>
                <p className="description mt-3">{data.desc}</p>
                {data.achievements && data.achievements.length > 0 && (
                  <div className="mt-4">
                    <h5 className="text-info mb-3">Key Achievements:</h5>
                    <ul className="list-unstyled">
                      {data.achievements.map((achievement, index) => (
                        <li key={index} className="py-2">
                          <div className="d-flex align-items-start">
                            <div className="icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white mr-3 mt-1">
                              <i className="fa fa-check"></i>
                            </div>
                            <span className="description">{achievement}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-4">
                  {data.github ? (
                    <Button
                      className="btn-icon mr-2"
                      color="github"
                      href={data.github}
                      target="_blank"
                      rel="noopener"
                      aria-label="Github"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-github" />
                      </span>
                    </Button>
                  ) : null}
                  {data.link ? (
                    <Button
                      className="btn-icon"
                      color="primary"
                      href={data.link}
                      target="_blank"
                      rel="noopener"
                      aria-label="Visit Website"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-arrow-right mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Visit Website
                      </span>
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </Col>
  );
};

export default ProjectsCard;
