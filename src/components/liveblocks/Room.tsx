"use client"

import { LiveList, LiveMap, LiveObject } from "@liveblocks/client"
import { ClientSideSuspense, LiveblocksProvider, RoomProvider } from "@liveblocks/react"
import { ReactNode } from "react"
import { Layer } from "~/types"

export function Room({ children, roomId }: {children: ReactNode, roomId: string}) {
    return (
        <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
            <RoomProvider id={roomId}  initialPresence={{
                selection: [],
                cursor: null,
                penColor: null,
                pencilDraft: null
            }} initialStorage={{
                roomColor: {r:30, g:30, b:30},
                layers: new LiveMap<string, LiveObject<Layer>>(),
                layerIds: new LiveList([]),
            }}>
            
            
            <ClientSideSuspense
             fallback={
                <div className="flex h-screen flex-col items-center justify-center space-y-4">
                <img
                src="/Untitled design (1).svg" 
                alt="figma logo"
                className="h-[50px] w-[50px] animate-bounce"
                />
            <h1 className="text-sm font-normal text-gray-500 ">...Loading...</h1>
            </div>

             }
            >
                {children}
            </ClientSideSuspense>

            
            </RoomProvider>
        </LiveblocksProvider>
    )
}