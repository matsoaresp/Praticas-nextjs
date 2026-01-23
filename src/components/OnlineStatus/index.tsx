type IsOnlineProps ={

    isOnline: boolean
}

export default function OnlineStatus ({isOnline}: IsOnlineProps) {

   return (
    <div>
        <p >{isOnline ? 'Usuario online' : 'Usuario offline'} </p>
    </div>
   ) 
} 