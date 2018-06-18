// Helpers
const jsonBlock = o => `\`\`\`json
${JSON.stringify(o, null, 2)}
\`\`\``;

const commentWithJSON = (s, o) => `${s}
${jsonBlock(o)}`;

// Comments
const config = o => commentWithJSON(`Prowl config for this PR:`, o);
const dryRun = payload =>
  commentWithJSON(
    `If this wasn't a [dry run](${payload.configUrl}), I would have **${
      payload.message
    }**.`,
    payload
  );
const id = s => `prowl app id is \`${s}\``;
const pounceStatus = o => commentWithJSON(`Status of this PR:`, o);

module.exports = {
  config,
  dryRun,
  id,
  pounceStatus
};
