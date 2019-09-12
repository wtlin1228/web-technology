# Service Worker

用 service worker 設定快取機制

## Running locally

To get this code. running locally on your computer as-is, you need to do the following:

1. Clone the repo in a location on your machine.
2. Start a local server running in the parent directory of the service-worker directory. For example, if you have Python on your machine you could start a server running on port 8001 using `python -m SimpleHTTPServer 8001` for Python 2.x, or `python3 -m http.server 8001` for Python 3.x.
3. Navigate to the service-worker directory on the local server, e.g. [http://localhost:8001/service-worker/](http://localhost:8001/service-worker/)

Note: The example has to be located under the service-worker directory (e.g. http://localhost:8001/service-worker/) and not at the root of the server (e.g. http://localhost:8001/) or anywhere else, for the service worker to work. It expects the document and associated assets it is controlling to be at this location.

# 參考的資源
+ [Understanding Service Workers and Caching Strategies](https://blog.bitsrc.io/understanding-service-workers-and-caching-strategies-a6c1e1cbde03)
+ [MDN Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
+ [服務工作線程：簡介](https://developers.google.com/web/fundamentals/primers/service-workers/?hl=zh-tw)