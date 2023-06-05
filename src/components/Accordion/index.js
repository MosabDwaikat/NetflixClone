import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { ImPlus, ImCross } from "react-icons/im";
import { Box } from "@mui/material";
import GetStarted from "../GetStarted";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box paddingBottom={"6rem"}>
      <Typography variant="h2" color={"white"} marginBottom={"16px"}>
        Frequently Asked Questions
      </Typography>
      {data.map((e, i) => {
        return (
          <Accordion
            key={i}
            expanded={expanded === "panel" + i + 1}
            onChange={handleChange("panel" + i + 1)}
            sx={{ marginBottom: "8px" }}
            variant="danger"
          >
            <AccordionSummary
              sx={{
                minHeight: "80px",
                backgroundColor: "rgba(19, 33, 68, 1)",
                "&:hover": {
                  backgroundColor: "rgba(34, 51, 98, 1)",
                },
                color: "red",
              }}
              expandIcon={
                expanded === "panel" + i + 1 ? (
                  <ImCross color="white" />
                ) : (
                  <ImPlus color="white" />
                )
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography fontSize={"24px"} color={"white"} sx={{}}>
                {e.summary}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "rgba(19, 33, 68, 1);" }}>
              <Typography fontSize={"24px"} color={"white"}>
                {e.details.map((d, i) => {
                  return (
                    <span key={i}>
                      {d}
                      {i !== e.details.length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </span>
                  );
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
      <GetStarted />
    </Box>
  );
}
const data = [
  {
    summary: "What is Netflix?",
    details: [
      `Netflix is a streaming service that offers a wide variety of award-winning TV shows,
     movies, anime, documentaries, and more on thousands of internet-connected devices.`,
      `You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. 
    There's always something new to discover and new TV shows and movies are added every week!`,
    ],
  },
  {
    summary: "How much does Netflix cost?",
    details: [
      `Watch Netflix on your smartphone, tablet, Smart TV,
     laptop, or streaming device, all for one fixed monthly fee. Plans range from
      USD3.99 to USD9.99 a month. No extra costs, no contracts.`,
    ],
  },
  {
    summary: "Where can I watch?",
    details: [
      `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com
     from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs,
      smartphones, tablets, streaming media players and game consoles.`,
      `You can also download your favorite shows with the iOS, Android, or Windows 10 app. 
      Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    ],
  },
  {
    summary: "How do I cancel?",
    details: [
      `Netflix is flexible. There are no pesky contracts and no commitments.
     You can easily cancel your account online in two clicks. 
     There are no cancellation fees – start or stop your account anytime.`,
    ],
  },
  {
    summary: "What can I watch on Netflix?",
    details: [
      `Netflix has an extensive library of feature films, documentaries, TV shows, anime, 
    award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    ],
  },
  {
    summary: "Is Netflix good for kids?",
    details: [
      `The Netflix Kids experience is included in your membership to give parents control 
    while kids enjoy family-friendly TV shows and movies in their own space.`,
      `Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating 
      of content kids can watch and block specific titles you don’t want kids to see.`,
    ],
  },
];
