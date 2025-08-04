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

export interface PersonInfo {
  navn: string,
  titel: string,
  personBilledeRef?: string,
  beskrivelse: string
}

export interface BlogPost {
  id: string,
  overskrift: string,
  indhold: string,
  featuredMedia?: string,
  mediaCaption?: string,
  link: string,
  dato: string,
  forfatter: string,
  uddrag: string
}