/** Finite allowance for conformance fixtures that resend complete Evidence.
 * Admission-policy regressions exercise the production default separately.
 */
export const INLINE_EVIDENCE_MCP_ENVIRONMENT = {
  REA_MCP_MAX_INPUT_ELEMENTS: "65536",
} as const;
