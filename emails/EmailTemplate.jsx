import React from 'react';
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

const EmailTemplate = ({ name, phoneNumber, email, message }) => {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={paragraph}>Name: {name}</Text>
          <Text style={paragraph}>Number: {phoneNumber}</Text>
          <Text style={paragraph}>Email: {email}</Text>
          <Text style={paragraph}>Message: {message}</Text>
        </Container>
      </Section>
    </Html>
  );
};

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};