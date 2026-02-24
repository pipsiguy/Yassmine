"use client";

import { useState } from 'react';
import { Column, Row, Input, Textarea, Button, Heading, Text, useToast } from "@once-ui-system/core";

export const ContactForm = () => {
    // Formspree static form
    // Replace YOUR_FORMSPREE_ID with your Formspree endpoint
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ID";

    return (
        <Column fillWidth gap="24" padding="xl" radius="l" background="surface" border="neutral-alpha-weak">
            <Column gap="8">
                <Heading variant="display-strong-xs">Get in Touch</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                    Have a project in mind? Let's build something extraordinary together.
                </Text>
            </Column>
            <form action={FORMSPREE_ENDPOINT} method="POST" style={{ width: '100%' }}>
                <Column gap="16">
                    <Row gap="16" s={{ direction: 'column' }}>
                        <Input
                            id="name"
                            name="name"
                            label="Name"
                            placeholder="Your Name"
                            required
                        />
                        <Input
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="Your Email"
                            required
                        />
                    </Row>
                    <Textarea
                        id="message"
                        name="message"
                        label="Message"
                        placeholder="Tell me about your project..."
                        required
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        fillWidth
                    >
                        Send Message
                    </Button>
                </Column>
            </form>
        </Column>
    );
};
