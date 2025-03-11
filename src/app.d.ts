declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      title?: {
        en: string
        ja: string
      }
      description?: {
        en: string
        ja: string
      }
    }
    // interface Platform {}
  }
}

export {}
