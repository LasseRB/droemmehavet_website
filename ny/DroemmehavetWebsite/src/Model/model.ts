export interface appFeature {
  overskrift: string,
  beskrivelse: string,
  billedeRef: string
}

export interface explainerVideo {
  overskrift: string,
  beskrivelse: string,
  videoRef: string
}

export interface personInfo {
  navn: string,
  titel: string,
  personBilledeRef?: string,
  beskrivelse: string
}

export interface blogIndlaeg {
  overskrift: string,
  indholdsTekst: string,
  blogVideoRef?: string,
  blogBilledeRef?: string,
  linkId: string,
  dato: string
}