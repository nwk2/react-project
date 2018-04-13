import React, {Component} from 'react';
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';

class Metrics extends Component {


    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <p>Metrics from Actuator</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Accordion multiple={true}>
                        <AccordionTab header="Some Metric">
                            asdsasdadd
                        </AccordionTab>
                        <AccordionTab header="Health">
                            Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
                           g the local Black Hand
                            Fanucci after he demands his customary cut of the tyro's business. Wione, Vito's communal stature grows.
                        </AccordionTab>
                        <AccordionTab header="asdadad">
                            After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
        )
    }
}

export default Metrics;