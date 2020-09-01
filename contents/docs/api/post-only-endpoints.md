---
title: POST-Only Public Endpoints
sidebar: Docs
showTitle: true
---

As explained in our [API Overview](/docs/api/api-overview) page, PostHog provides two different APIs. 

This page refers to our public endpoints, which use the same API key as the [PostHog snippet](/docs/integrations/js-integration). The endpoints documented here are used solely with `POST` requests, and will not return any sensitive data from your PostHog instance. 

**Note:** For this API, you should use your 'Team API Key' from the `/setup` page in PostHog. This is the same key used in your frontend snippet.

## Feature Flags

PostHog offers support for [feature flags](/docs/features/feature-flags), and you can use our APIs to create and make use of feature flags. However, it is important to note that while creating a feature flag is a private action that only your team should be able to perform, checking if a feature flag is active is not. 

As such, to create feature flags, you will need to use [this endpoint](/docs/api/feature-flags). However, to check if a feature flag is enabled, you can use the following endpoint:

#### /decide

`/decide` is the endpoint used to determine if a given flag is enabled for a certain user or not. This endpoint is used by our [JavaScript integration's](/docs/integrations/js-integration) methods for feature flags.

To get the feature flags that are enabled for a given user, you will need to perform the following request:

```shell
POST https://[your-instance].com/decide/
Content-Type: application/json
Body:
{
    "api_key": "[your api key in /setup]",
    "event": "[event name]",
    "properties": {
        "distinct_id": "[your users' distinct id]",
        "key1": "value1",
        "key2": "value2"
    },
    "timestamp": "[optional timestamp in ISO 8601 format]"
}
```

## Sending events

To send events to PostHog, you can use any of [our libraries](/docs/integrations) **or** any Mixpanel library by changing the `api_host` setting to the address of your instance. 

If you'd prefer to do the requests yourself, you can send events in the following format:

## Single event

**Note:** Timestamp is optional. If not set, it'll automatically be set to the current time.

```shell
POST https://[your-instance].com/capture/
Content-Type: application/json
Body:
{
    "api_key": "[your api key in /setup]",
    "event": "[event name]",
    "properties": {
        "distinct_id": "[your users' distinct id]",
        "key1": "value1",
        "key2": "value2"
    },
    "timestamp": "[optional timestamp in ISO 8601 format]"
}
```

## Batch events

You can send multiple events in one go with the Batch API.

**Note:** Timestamp is optional. If not set, it'll automatically be set to the current time.

```bash
POST https://[your-instance].com/capture/
Content-Type: application/json
Body:
{
    "api_key": "[your api key in /setup]",
    "batch": [
        {
            "event": "[event name]",
            "properties": {
                "distinct_id": "[your users' distinct id]",
                "key1": "value1",
                "key2": "value2"
            },
            "timestamp": "[optional timestamp in ISO 8601 format]"
        },
        ...
    ]
}
```

## Sample Requests

Here are some sample `curl` queries for each event type. Do note that you need to insert your API key into the `api_key` field.

Additionally, if you're self-hosting, you'll have to substitute `https://app.posthog.com/` for the URL of your instance.

### Alias

```bash
curl -v -L --header "Content-Type: application/json" -d '{
    "api_key": "<INSERT YOUR API KEY>",
    "properties": {
        "distinct_id": "123",
        "alias": "456"
    },
    "timestamp": "2020-08-16 09:03:11.913767",
    "context": "{}",
    "type": "alias",
    "event": "$create_alias"
}' https://app.posthog.com/batch/
```

### Capture

```bash
curl -v -L --header "Content-Type: application/json" -d '{
    "api_key": "<INSERT YOUR API KEY>",
    "properties": {},
    "timestamp": "2020-08-16 09:03:11.913767",
    "context": {},
    "distinct_id": "1234",
    "type": "capture",
    "event": "$event",
    "messageId": "1234"
}' https://app.posthog.com/batch/
```

### Identify

```bash
curl -v -L --header "Content-Type: application/json" -d '{
    "api_key": "<INSERT YOUR API KEY>",
    "timestamp": "2020-08-16 09:03:11.913767",
    "context": {},
    "type": "screen",
    "distinct_id": "1234",
    "$set": {},
    "event": "$identify",
    "messageId": "123"
}' https://app.posthog.com/batch/
```

### Group

```bash
curl -v -L --header "Content-Type: application/json" -d '{
    "api_key": "<INSERT YOUR API KEY>",
    "timestamp": "2020-08-16 09:03:11.913767",
    "groupId": "123",
    "context": {},
    "distinct_id": "1234",
    "traits": {},
    "type": "group",
    "event": "$group",
    "messageId": "123"
}' https://app.posthog.com/batch/
```

### Page

```bash
curl -v -L --header "Content-Type: application/json" -d '{
    "api_key": "<INSERT YOUR API KEY>",
    "properties": {},
    "timestamp": "2020-08-16 09:03:11.913767",
    "category": "some category",
    "context": {},
    "distinct_id": "1234",
    "type": "page",
    "event": "$page",
    "name": "a page",
    "messageId": "123"
}' https://app.posthog.com/batch/
```

### Screen

```bash
curl -v -L --header "Content-Type: application/json" -d '{
    "api_key": "<INSERT YOUR API KEY>",
    "properties": {},
    "timestamp": "2020-08-16 09:03:11.913767",
    "category": "some category",
    "context": {},
    "distinct_id": "1234",
    "type": "screen",
    "event": "$screen",
    "name": "a page",
    "messageId": "123"
}' https://app.posthog.com/batch/
```


## Reading data from PostHog

We have another set of APIs to read/modify anything in PostHog. See our [API documentation](/docs/api/api) for more information.

Also, feel free to reach out in the [PostHog Users Slack](https://join.slack.com/t/posthogusers/shared_invite/enQtOTY0MzU5NjAwMDY3LTc2MWQ0OTZlNjhkODk3ZDI3NDVjMDE1YjgxY2I4ZjI4MzJhZmVmNjJkN2NmMGJmMzc2N2U3Yjc3ZjI5NGFlZDQ) if you'd like help with the API.