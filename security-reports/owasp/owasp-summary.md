# OWASP Dependency-Check Summary

- **Project:** my-app
- **Commit:** 22dae6175d33cf34a9bd0d16f8c2cf0d7a1a52f7
- **Dependencies scanned:** 90
- **Vulnerable dependencies:** 14
- **Total vulnerabilities:** 18

## Vulnerability Severity Overview

| Severity | Count |
|---|---|
| CRITICAL | 0 |
| HIGH | 8 |
| MEDIUM | 10 |
| LOW | 0 |
| UNKNOWN | 0 |

## Top Vulnerable Dependencies

| Dependency | Vulnerabilities |
|---|---|
| bcpg-jdk18on-1.71.jar | 1 |
| bcprov-jdk18on-1.71.jar | 1 |
| commons-beanutils-1.9.4.jar | 1 |
| commons-lang3-3.14.0.jar | 1 |
| commons-validator-1.9.0.jar | 1 |
| h2-2.1.214.jar | 1 |
| httpclient5-5.3.1.jar | 1 |
| httpcore5-5.2.4.jar | 2 |
| jackson-databind-2.17.2.jar | 4 |
| logback-core-1.2.11.jar | 1 |
| sonar-scanner-cli-5.0.1.3006.jar (shaded: com.squareup.okhttp3:okhttp-urlconnection:3.14.2) | 1 |
| sonar-scanner-cli-5.0.1.3006.jar (shaded: com.squareup.okhttp3:okhttp:3.14.2) | 1 |
| sonar-scanner-cli-5.0.1.3006.jar (shaded: com.squareup.okio:okio:1.17.2) | 1 |
| velocity-engine-core-2.3.jar (shaded: commons-io:commons-io:2.8.0) | 1 |

## Vulnerability Details

### bcpg-jdk18on-1.71.jar

| ID | Severity | CVSS | Title |
|---|---|---|---|
| CVE-2023-33202 | MEDIUM | 5.5 | Bouncy Castle for Java before 1.73 contains a potential Denial of Service (DoS) issue within the Bouncy Castle org.bo... |

### bcprov-jdk18on-1.71.jar

| ID | Severity | CVSS | Title |
|---|---|---|---|
| CVE-2023-33202 | MEDIUM | 5.5 | Bouncy Castle for Java before 1.73 contains a potential Denial of Service (DoS) issue within the Bouncy Castle org.bo... |

### commons-beanutils-1.9.4.jar

| ID | Severity | CVSS | Title |
|---|---|---|---|
| CVE-2025-48734 | HIGH | 8.8 | Improper Access Control vulnerability in Apache Commons.    A special BeanIntrospector class was added in version 1.9... |

### commons-lang3-3.14.0.jar

| ID | Severity | CVSS | Title |
|---|---|---|---|
| CVE-2025-48924 | MEDIUM | 5.3 | Uncontrolled Recursion vulnerability in Apache Commons Lang.  This issue affects Apache Commons Lang: Starting with c... |

### commons-validator-1.9.0.jar

| ID | Severity | CVSS | Title |
|---|---|---|---|
| CVE-2025-15104 | MEDIUM | 5.3 | Nu Html Checker (validator.nu) contains a restriction bypass that allows remote attackers to make the server perform ... |

### h2-2.1.214.jar

| ID | Severity | CVSS | Title |
|---|---|---|---|
| CVE-2022-45868 | HIGH | 7.8 | The web-based admin console in H2 Database Engine before 2.2.220 can be started via the CLI with the argument -webAdm... |

### httpclient5-5.3.1.jar

| ID | Severity | CVSS | Title |
|---|---|---|---|
| CVE-2026-64607 | MEDIUM | 5.3 | HttpClient based on the classic i/o model fails to correctly release the underlying connection back to the connection... |

### httpcore5-5.2.4.jar

| ID | Severity | CVSS | Title |
|---|---|---|---|
| CVE-2026-54399 | HIGH | 7.5 | Uncontrolled Resource Consumption vulnerability in the HTTP/1.1 message parser in Apache HttpComponents Core (5.4.2 a... |
| CVE-2026-54428 | HIGH | 7.5 | Allocation of resources without limits or throttling in the HTTP/2 HPACK decoder in Apache HttpComponents Core (5.4.2... |

### jackson-databind-2.17.2.jar

| ID | Severity | CVSS | Title |
|---|---|---|---|
| CVE-2026-54512 | HIGH | 8.1 | jackson-databind contains the general-purpose data-binding functionality and tree-model for Jackson Data Processor. F... |
| CVE-2026-54513 | HIGH | 8.1 | jackson-databind contains the general-purpose data-binding functionality and tree-model for Jackson Data Processor. F... |
| CVE-2026-54514 | MEDIUM | 5.3 | jackson-databind contains the general-purpose data-binding functionality and tree-model for Jackson Data Processor. F... |
| CVE-2026-54515 | MEDIUM | 5.3 | jackson-databind contains the general-purpose data-binding functionality and tree-model for Jackson Data Processor. F... |

### logback-core-1.2.11.jar

| ID | Severity | CVSS | Title |
|---|---|---|---|
| CVE-2023-6378 | HIGH | 7.5 | A serialization vulnerability in logback receiver component part of  logback version 1.4.11 allows an attacker to mou... |

### sonar-scanner-cli-5.0.1.3006.jar (shaded: com.squareup.okhttp3:okhttp-urlconnection:3.14.2)

| ID | Severity | CVSS | Title |
|---|---|---|---|
| CVE-2023-0833 | MEDIUM | 5.5 | A flaw was found in Red Hat's AMQ-Streams, which ships a version of the OKHttp component with an information disclosu... |

### sonar-scanner-cli-5.0.1.3006.jar (shaded: com.squareup.okhttp3:okhttp:3.14.2)

| ID | Severity | CVSS | Title |
|---|---|---|---|
| CVE-2023-0833 | MEDIUM | 5.5 | A flaw was found in Red Hat's AMQ-Streams, which ships a version of the OKHttp component with an information disclosu... |

### sonar-scanner-cli-5.0.1.3006.jar (shaded: com.squareup.okio:okio:1.17.2)

| ID | Severity | CVSS | Title |
|---|---|---|---|
| CVE-2023-3635 | HIGH | 7.5 | GzipSource does not handle an exception that might be raised when parsing a malformed gzip buffer. This may lead to d... |

### velocity-engine-core-2.3.jar (shaded: commons-io:commons-io:2.8.0)

| ID | Severity | CVSS | Title |
|---|---|---|---|
| CVE-2024-47554 | MEDIUM | 4.3 | Uncontrolled Resource Consumption vulnerability in Apache Commons IO.  The org.apache.commons.io.input.XmlStreamReade... |

