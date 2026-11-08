export default {
  name: 'Clayent',

  invoke: (name: string, payload?: any) => {
    return window.Clayent.invoke(name, payload)
  },
  event: {
    emit: (name: string, payload?: any) => {
      return window.Clayent.emit(name, payload)
    },
    listen: async (name: string, callback: (payload: any) => void) => {
      return window.Clayent.listen(name, callback)
    }
  },
  app: {
    getVersion: () => {
      return window.Clayent.invoke('get_version') as Promise<string>
    }
  },
  process: {
    relaunch: () => {
      return window.Clayent.invoke('relaunch')
    }
  },
  apiWindow: {
    appWindow: {
      setFullscreen: (isFullscreen: boolean) => {
        return window.Clayent.invoke('set_fullscreen', isFullscreen)
      }
    }
  }
} satisfies Backend
