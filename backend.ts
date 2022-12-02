import { serve } from "https://deno.land/std@0.157.0/http/server.ts";
import * as fs from "fs";

const port = 80;

const handler = async (request: Request): Promise<Response> => {
  const resp = fs.readFile("page.html");
  console.log("Requête");
  console.log(resp);
  return new Response(resp, {
    status: resp.status,
    
  });

};

console.log("Listening on http://localhost:8000");
serve(handler);