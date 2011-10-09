---
layout: post
title: GET /v1/deviations/status/
---

Deviation status report for the user query.

### Endpoint

`http://api.av.vikel.se/v1/deviations/status/`

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
            <td><code>line</code></td>
            <td>A line number</td>
            <td><code>4</code></td>
        </tr>
        <tr>
            <td><code>vehicle</code></td>
            <td>The vehicle it affects</td>
            <td>Example train number 568</td>
        </tr>
        <tr>
            <td><code>transport</code></td>
            <td>The transport mode</td>
            <td>Must be one of <code>BUS</code>, <code>METRO</code>, <code>TRAIN</code></td>
        </tr>
        <tr>
            <td><code>latitude</code></td>
            <td>The latitude</td>
            <td>WSG84 example <code>59.316331</code></td>
        </tr>
        <tr>
            <td><code>longitude</code></td>
            <td>The longitude</td>
            <td>WSG84 example <code>18.034143</code></td>
        </tr>
        <tr>
            <td><code>distance</code></td>
            <td>The distance to use in combination with <code>latitude</code> and <code>longitude</code></td>
            <td><code>0.5</code></td>
        </tr>
    </tbody>
</table>

### Example

#### Request

{% highlight bash prettyprint %}
curl -X GET "http://api.av.vikel.se/v1/deviations/status/?line=4"
{% endhighlight %}

#### Response

{% highlight javascript %}
{
    "affects": 0,
    "comments": []
}
{% endhighlight %}
