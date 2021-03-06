---
layout: post
title: GET /v1/deviations/:id/
---

Creates a new deviation.

### Endpoint

`http://api.av.vikel.se/v1/deviations/:id/`

### Method

`GET`

### Parameters


<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>callback</code></td>
            <td>The JSONP method to wrap the response with.</td>
            <td><code>callback=myAwesomeFunction</code></td>
        </tr>
    </tbody>
</table>

### Example

#### Request

{% highlight bash prettyprint %}
curl -X GET http://api.av.vikel.se/v1/deviations/:id/
{% endhighlight %}

#### Response

{% highlight javascript %}
{
    "deviation": {
        "comment": "Stopp vid Hornstull",
        "created_at": "2011-10-08T20:48:24.313000",
        "longitude": "18.034143",
        "vehicle": "12345",
        "latitude": "59.316331",
        "line": "4"
    }
}
{% endhighlight %}
