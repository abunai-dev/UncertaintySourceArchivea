import type { Uncertainty } from "@/util/types/Uncertainty";
import recognizedIgnorance from "./manifestations/type/recognizedIgnorance";
import partialReducible from "./manifestations/manageability/partialReducible";
import runTime from "./manifestations/resolutionTime/runTime";
import notReducible from "./manifestations/reducibleByADD/notReducible";
import indirect from "./manifestations/impactOnConfidentiality/indirect";
import high from "./manifestations/severityOfImpact/high";
import { Keyword } from "@/util/types/Keyword";
import inputLocation from "./manifestations/location/input";
import usageBehaviour from "./manifestations/architecturalElementType/usageBehaviour";
import systemBehaviour from "./manifestations/location/systembehaviour";
import interfaceManifestation from "./manifestations/architecturalElementType/interface";
import low from "./manifestations/severityOfImpact/low";
import { RelationshipPosition } from "@/util/types/RelationshipPosition";
import irreducible from "./manifestations/manageability/irreducible";
import connector from "./manifestations/architecturalElementType/connector";
import scenarioUncertainty from "./manifestations/type/scenarioUncertainty";
import fullyReducible from "./manifestations/manageability/fullyReducible";
import designTime from "./manifestations/resolutionTime/designTime";
import reducible from "./manifestations/reducibleByADD/reducible";
import component from "./manifestations/architecturalElementType/component";
import requirementsTime from "./manifestations/resolutionTime/requirementsTime";
import direct from "./manifestations/impactOnConfidentiality/direct";
import statisticalUncertainty from "./manifestations/type/statisticalUncertainty";
import systemEnvironment from "./manifestations/location/systemenvironment";
import hardwareResource from "./manifestations/architecturalElementType/hardwareResource";
import realizationTime from "./manifestations/resolutionTime/realizationTime";
import systemStructure from "./manifestations/location/systemstructure";

const uncertainties : Uncertainty[] = [
    {
        "id": 1,
        "name": "Are SQL Injections performed?",
        "location": inputLocation,
        "architecturalType": usageBehaviour,
        "type": scenarioUncertainty,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty two can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty two can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty two can be displayed correctly.",
        "exampleImagePath": "uncertaintyone.jpg",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/1"
    },
    {
        "id": 2,
        "name": "Are the access control rules correct?",
        "location": systemBehaviour,
        "architecturalType": interfaceManifestation,
        "type": recognizedIgnorance,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
                {
                    "relatedToId": 1,
                    "positionInRelationship": RelationshipPosition.Parent
                },
                {
                    "relatedToId": 3
                }  
            ],
        "description": "This is a Test if the description of uncertainty two can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty two can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty two can be displayed correctly.",
        "exampleImagePath": "uncertaintytwo.jpg",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/2"
    },
    {
        "id": 3,
        "name": "Can access control cover all matters?",
        "location": systemBehaviour,
        "architecturalType": interfaceManifestation,
        "type": recognizedIgnorance,
        "manageability": irreducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty three can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty three can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty three can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 4,
        "name": "How is communicated?",
        "location": systemBehaviour,
        "architecturalType": connector,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty four can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty four can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty four can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 5,
        "name": "How is data persisted?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty five can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty five can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty five can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 6,
        "name": "How is metadata handled?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty six can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty six can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty six can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 7,
        "name": "How is user identification performed?",
        "location": systemBehaviour,
        "architecturalType": interfaceManifestation,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty seven can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty seven can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty seven can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 8,
        "name": "How long is data being stored?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": runTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty eight can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty eight can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty eight can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 9,
        "name": "Is communication intercepted?",
        "location": systemBehaviour,
        "architecturalType": connector,
        "type": recognizedIgnorance,
        "manageability": fullyReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty nine can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty nine can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty nine can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 10,
        "name": "Is confidential data transmitted?",
        "location": systemBehaviour,
        "architecturalType": interfaceManifestation,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": requirementsTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty ten can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty ten can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty ten can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 11,
        "name": "Is data manipulated?",
        "location": inputLocation,
        "architecturalType": interfaceManifestation,
        "type": recognizedIgnorance,
        "manageability": irreducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty eleven can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty eleven can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty eleven can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 12,
        "name": "Is the communication encrypted?",
        "location": systemBehaviour,
        "architecturalType": connector,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": requirementsTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty twelve can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty twelve can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twelve can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 13,
        "name": "Is the component currently compromised?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": recognizedIgnorance,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty thirteen can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty thirteen can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirteen can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 14,
        "name": "Is the component insecure due to software?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": statisticalUncertainty,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty fourteen can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty fourteen can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty fourteen can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 15,
        "name": "Is the component's provider trustworthy?",
        "location": systemEnvironment,
        "architecturalType": component,
        "type": recognizedIgnorance,
        "manageability": irreducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty fifteen can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty fifteen can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty fifteen can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 16,
        "name": "Is the data anonymized?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": requirementsTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty sixteen can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty sixteen can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty sixteen can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 17,
        "name": "Is the data entered correct?",
        "location": inputLocation,
        "architecturalType": usageBehaviour,
        "type": recognizedIgnorance,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty seventeen can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty seventeen can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty seventeen can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 18,
        "name": "Is the data to be persisted confidential?",
        "location": systemEnvironment,
        "architecturalType": component,
        "type": recognizedIgnorance,
        "manageability": partialReducible,
        "resolutionTime": requirementsTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty eighteen can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty eighteen can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty eighteen can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 19,
        "name": "Is the deployment provider trustworthy?",
        "location": systemEnvironment,
        "architecturalType": hardwareResource,
        "type": recognizedIgnorance,
        "manageability": irreducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty nineteen can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty nineteen can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty nineteen can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 20,
        "name": "Is the input validated?",
        "location": systemBehaviour,
        "architecturalType": interfaceManifestation,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty twenty can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty twenty can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twenty can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 21,
        "name": "Is the storage encrypted?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty twentyone can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty twentyone can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentyone can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 22,
        "name": "Is user data stored/processed?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": requirementsTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty twentytwo can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty twentytwo can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentytwo can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 23,
        "name": "Is virtualization used?",
        "location": systemEnvironment,
        "architecturalType": hardwareResource,
        "type": scenarioUncertainty,
        "manageability": partialReducible,
        "resolutionTime": realizationTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty twentythree can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty twentythree can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentythree can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 24,
        "name": "What data is entered?",
        "location": inputLocation,
        "architecturalType": interfaceManifestation,
        "type": scenarioUncertainty,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty twentyfour can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty twentyfour can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentyfour can be displayed correctly.",
        "exampleImagePath": "uncertaintythree.jpg",
        "communityAnnotationUrl": ""
    },
    {
        "id": 25,
        "name": "What data is logged?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty twentyfive can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty twentyfive can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentyfive can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 26,
        "name": "What data is persisted?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": recognizedIgnorance,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty twentysix can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty twentysix can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentysix can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 27,
        "name": "What data is provided?",
        "location": systemBehaviour,
        "architecturalType": interfaceManifestation,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty twentyseven can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty twentyseven can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentyseven can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 28,
        "name": "What is the behavior of the component?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": statisticalUncertainty,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty twentyeight can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty twentyeight can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentyeight can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 29,
        "name": "What is the distribution?",
        "location": systemStructure,
        "architecturalType": hardwareResource,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty twentynine can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty twentynine can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentynine can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 30,
        "name": "What is the structure of the interface?",
        "location": systemStructure,
        "architecturalType": interfaceManifestation,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty thirty can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty thirty can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirty can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 31,
        "name": "What is the user behavior?",
        "location": inputLocation,
        "architecturalType": usageBehaviour,
        "type": statisticalUncertainty,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty thirtyone can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty thirtyone can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtyone can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 32,
        "name": "What kind of access control is used?",
        "location": systemBehaviour,
        "architecturalType": interfaceManifestation,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty thirtytwo can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty thirtytwo can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtytwo can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 33,
        "name": "What kind of storage is used?",
        "location": systemEnvironment,
        "architecturalType": hardwareResource,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty thirtythree can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty thirtythree can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtythree can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 34,
        "name": "Where is data persisted?",
        "location": systemEnvironment,
        "architecturalType": hardwareResource,
        "type": scenarioUncertainty,
        "manageability": partialReducible,
        "resolutionTime": realizationTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty thirtyfour can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty thirtyfour can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtyfour can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 35,
        "name": "Where is data processed?",
        "location": systemBehaviour,
        "architecturalType": hardwareResource,
        "type": scenarioUncertainty,
        "manageability": partialReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty thirtyfive can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty thirtyfive can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtyfive can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 36,
        "name": "Where is deployed?",
        "location": systemEnvironment,
        "architecturalType": hardwareResource,
        "type": scenarioUncertainty,
        "manageability": partialReducible,
        "resolutionTime": realizationTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty thirtysix can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty thirtysix can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtysix can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 37,
        "name": "Which access rights does a subject have?",
        "location": systemBehaviour,
        "architecturalType": connector,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": requirementsTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty thirtyseven can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty thirtyseven can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtyseven can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 38,
        "name": "Which authentication mechanisms are used?",
        "location": systemBehaviour,
        "architecturalType": interfaceManifestation,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty thirtyeight can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty thirtyeight can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtyeight can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 39,
        "name": "Which component is chosen?",
        "location": systemStructure,
        "architecturalType": component,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty thirtynine can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty thirtynine can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtynine can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 40,
        "name": "Which subjects access the interface?",
        "location": inputLocation,
        "architecturalType": interfaceManifestation,
        "type": recognizedIgnorance,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty fourty can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty fourty can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty fourty can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    } 
]

export default uncertainties;