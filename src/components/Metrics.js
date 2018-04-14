import React, {Component} from 'react';
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';


class Metrics extends Component {

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <p>Metrics from Actuator (Incomplete - Using prometheus)</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Accordion multiple={true}>
                        <AccordionTab header="Status">
                            lorum ipsum
                        </AccordionTab>
                        <AccordionTab header="Health">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque quis ante lectus. Quisque tincidunt cursus ullamcorper.
                            Cras ultricies dui sed elit
                        </AccordionTab>
                        <AccordionTab header="Info">
                            sodales ultrices. Maecenas et enim felis.
                            Sed posuere semper luctus.
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
        )
    }
}

export default Metrics;