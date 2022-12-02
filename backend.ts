import { serve } from "https://deno.land/std@0.157.0/http/server.ts";
import { copy } from "https://deno.land/std@0.167.0/streams/conversion.ts";

//const port = 80;

const handler = async (request: Request): Promise<Response> => {
  let texte = "";
  const resp = Deno.open("page.txt");
  await copy(resp, Deno.stdout);
  resp.then(function(success) {texte=success;});
  console.log("Requête");
  console.log(texte);
  console.log(request.body)
  return new Response(texte, {
    status: resp.status,
    
  });

};

console.log("Listening on http://localhost:8000");
serve(handler);