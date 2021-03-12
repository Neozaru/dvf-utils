module.exports = nonce => {
  const formattedUTCDate = new Date(nonce * 1000).toUTCString()
  return `Signing in to DeversiFi on ${formattedUTCDate}. For your safety, only sign this message on DeversiFi.`.toString(16)
}
