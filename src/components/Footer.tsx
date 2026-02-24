import { Row, Column, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Column gap="4">
          <Text variant="body-default-s" onBackground="neutral-strong">
            <Text onBackground="neutral-weak">© {currentYear} /</Text>
            <Text paddingX="4">{person.name}</Text>
          </Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            Website template by <SmartLink href="https://github.com/mahenoorsalat/salat-mahenoor-ai-creative-developer">Salat Mahenoor</SmartLink> — used and modified under <SmartLink href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY‑NC 4.0</SmartLink>
          </Text>
        </Column>
        <Row gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  aria-label={item.name}
                  size="s"
                  variant="ghost"
                />

              ),
          )}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row >
  );
};
